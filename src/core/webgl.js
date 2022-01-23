// @ts-nocheck
/*
 *   Stripe WebGl Gradient Animation
 *   All Credits to Stripe.com
 *   ScrollObserver functionality to disable animation when not scrolled into view has been disabled and
 *   commented out for now.
 *   https://kevinhufnagl.com
 */

//Converting colors to proper format
export function normalizeColor(hexCode) {
  return [
    ((hexCode >> 16) & 255) / 255,
    ((hexCode >> 8) & 255) / 255,
    (255 & hexCode) / 255,
  ];
}
["SCREEN", "LINEAR_LIGHT"].reduce(
  (hexCode, t, n) =>
    Object.assign(hexCode, {
      [t]: n,
    }),
  {}
);

//Essential functionality of WebGl
//t = width
//n = height
export class MiniGl {
  constructor(canvas, width, height, debug = false) {
    const _miniGl = this,
      debug_output =
        -1 !== document.location.search.toLowerCase().indexOf("debug=webgl");
    (_miniGl.canvas = canvas),
      (_miniGl.gl = _miniGl.canvas.getContext("webgl", {
        antialias: true,
        preserveDrawingBuffer: true,
      })),
      (_miniGl.meshes = []);
    const context = _miniGl.gl;
    width && height && this.setSize(width, height),
      _miniGl.lastDebugMsg,
      (_miniGl.debug =
        debug && debug_output
          ? function (e) {
              const t = new Date();
              t - _miniGl.lastDebugMsg > 1e3 && console.log("---"),
                console.log(
                  t.toLocaleTimeString() +
                    Array(Math.max(0, 32 - e.length)).join(" ") +
                    e +
                    ": ",
                  ...Array.from(arguments).slice(1)
                ),
                (_miniGl.lastDebugMsg = t);
            }
          : () => {}),
      Object.defineProperties(_miniGl, {
        Material: {
          enumerable: false,
          value: class {
            constructor(vertexShaders, fragments, uniforms = {}) {
              const material = this;
              function getShaderByType(type, source) {
                const shader = context.createShader(type);
                return (
                  context.shaderSource(shader, source),
                  context.compileShader(shader),
                  context.getShaderParameter(shader, context.COMPILE_STATUS) ||
                    console.error(context.getShaderInfoLog(shader)),
                  _miniGl.debug("Material.compileShaderSource", {
                    source: source,
                  }),
                  shader
                );
              }
              function getUniformVariableDeclarations(uniforms, type) {
                return Object.entries(uniforms)
                  .map(([uniform, value]) =>
                    value.getDeclaration(uniform, type)
                  )
                  .join("\n");
              }
              (material.uniforms = uniforms), (material.uniformInstances = []);

              const prefix =
                "\n              precision highp float;\n            ";
              (material.vertexSource = `\n              ${prefix}\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ${getUniformVariableDeclarations(
                _miniGl.commonUniforms,
                "vertex"
              )}\n              ${getUniformVariableDeclarations(
                uniforms,
                "vertex"
              )}\n              ${vertexShaders}\n            `),
                (material.Source = `\n              ${prefix}\n              ${getUniformVariableDeclarations(
                  _miniGl.commonUniforms,
                  "fragment"
                )}\n              ${getUniformVariableDeclarations(
                  uniforms,
                  "fragment"
                )}\n              ${fragments}\n            `),
                (material.vertexShader = getShaderByType(
                  context.VERTEX_SHADER,
                  material.vertexSource
                )),
                (material.fragmentShader = getShaderByType(
                  context.FRAGMENT_SHADER,
                  material.Source
                )),
                (material.program = context.createProgram()),
                context.attachShader(material.program, material.vertexShader),
                context.attachShader(material.program, material.fragmentShader),
                context.linkProgram(material.program),
                context.getProgramParameter(
                  material.program,
                  context.LINK_STATUS
                ) || console.error(context.getProgramInfoLog(material.program)),
                context.useProgram(material.program),
                material.attachUniforms(void 0, _miniGl.commonUniforms),
                material.attachUniforms(void 0, material.uniforms);
            }
            //t = uniform
            attachUniforms(name, uniforms) {
              //n  = material
              const material = this;
              void 0 === name
                ? Object.entries(uniforms).forEach(([name, uniform]) => {
                    material.attachUniforms(name, uniform);
                  })
                : "array" == uniforms.type
                ? uniforms.value.forEach((uniform, i) =>
                    material.attachUniforms(`${name}[${i}]`, uniform)
                  )
                : "struct" == uniforms.type
                ? Object.entries(uniforms.value).forEach(([uniform, i]) =>
                    material.attachUniforms(`${name}.${uniform}`, i)
                  )
                : (_miniGl.debug("Material.attachUniforms", {
                    name: name,
                    uniform: uniforms,
                  }),
                  material.uniformInstances.push({
                    uniform: uniforms,
                    location: context.getUniformLocation(
                      material.program,
                      name
                    ),
                  }));
            }
          },
        },
        Uniform: {
          enumerable: !1,
          value: class {
            constructor(e) {
              (this.type = "float"), Object.assign(this, e);
              (this.typeFn =
                {
                  float: "1f",
                  int: "1i",
                  vec2: "2fv",
                  vec3: "3fv",
                  vec4: "4fv",
                  mat4: "Matrix4fv",
                }[this.type] || "1f"),
                this.update();
            }
            update(value) {
              void 0 !== this.value &&
                context[`uniform${this.typeFn}`](
                  value,
                  0 === this.typeFn.indexOf("Matrix")
                    ? this.transpose
                    : this.value,
                  0 === this.typeFn.indexOf("Matrix") ? this.value : null
                );
            }
            //e - name
            //t - type
            //n - length
            getDeclaration(name, type, length) {
              const uniform = this;
              if (uniform.excludeFrom !== type) {
                if ("array" === uniform.type)
                  return (
                    uniform.value[0].getDeclaration(
                      name,
                      type,
                      uniform.value.length
                    ) + `\nconst int ${name}_length = ${uniform.value.length};`
                  );
                if ("struct" === uniform.type) {
                  let name_no_prefix = name.replace("u_", "");
                  return (
                    (name_no_prefix =
                      name_no_prefix.charAt(0).toUpperCase() +
                      name_no_prefix.slice(1)),
                    `uniform struct ${name_no_prefix} 
                                  {\n` +
                      Object.entries(uniform.value)
                        .map(([name, uniform]) =>
                          uniform
                            .getDeclaration(name, type)
                            .replace(/^uniform/, "")
                        )
                        .join("") +
                      `\n} ${name}${length > 0 ? `[${length}]` : ""};`
                  );
                }
                return `uniform ${uniform.type} ${name}${
                  length > 0 ? `[${length}]` : ""
                };`;
              }
            }
          },
        },
        PlaneGeometry: {
          enumerable: !1,
          value: class {
            constructor(width, height, n, i, orientation) {
              context.createBuffer(),
                (this.attributes = {
                  position: new _miniGl.Attribute({
                    target: context.ARRAY_BUFFER,
                    size: 3,
                  }),
                  uv: new _miniGl.Attribute({
                    target: context.ARRAY_BUFFER,
                    size: 2,
                  }),
                  uvNorm: new _miniGl.Attribute({
                    target: context.ARRAY_BUFFER,
                    size: 2,
                  }),
                  index: new _miniGl.Attribute({
                    target: context.ELEMENT_ARRAY_BUFFER,
                    size: 3,
                    type: context.UNSIGNED_SHORT,
                  }),
                }),
                this.setTopology(n, i),
                this.setSize(width, height, orientation);
            }
            setTopology(e = 1, t = 1) {
              const n = this;
              (n.xSegCount = e),
                (n.ySegCount = t),
                (n.vertexCount = (n.xSegCount + 1) * (n.ySegCount + 1)),
                (n.quadCount = n.xSegCount * n.ySegCount * 2),
                (n.attributes.uv.values = new Float32Array(2 * n.vertexCount)),
                (n.attributes.uvNorm.values = new Float32Array(
                  2 * n.vertexCount
                )),
                (n.attributes.index.values = new Uint16Array(3 * n.quadCount));
              for (let e = 0; e <= n.ySegCount; e++)
                for (let t = 0; t <= n.xSegCount; t++) {
                  const i = e * (n.xSegCount + 1) + t;
                  if (
                    ((n.attributes.uv.values[2 * i] = t / n.xSegCount),
                    (n.attributes.uv.values[2 * i + 1] = 1 - e / n.ySegCount),
                    (n.attributes.uvNorm.values[2 * i] =
                      (t / n.xSegCount) * 2 - 1),
                    (n.attributes.uvNorm.values[2 * i + 1] =
                      1 - (e / n.ySegCount) * 2),
                    t < n.xSegCount && e < n.ySegCount)
                  ) {
                    const s = e * n.xSegCount + t;
                    (n.attributes.index.values[6 * s] = i),
                      (n.attributes.index.values[6 * s + 1] =
                        i + 1 + n.xSegCount),
                      (n.attributes.index.values[6 * s + 2] = i + 1),
                      (n.attributes.index.values[6 * s + 3] = i + 1),
                      (n.attributes.index.values[6 * s + 4] =
                        i + 1 + n.xSegCount),
                      (n.attributes.index.values[6 * s + 5] =
                        i + 2 + n.xSegCount);
                  }
                }
              n.attributes.uv.update(),
                n.attributes.uvNorm.update(),
                n.attributes.index.update(),
                _miniGl.debug("Geometry.setTopology", {
                  uv: n.attributes.uv,
                  uvNorm: n.attributes.uvNorm,
                  index: n.attributes.index,
                });
            }
            setSize(width = 1, height = 1, orientation = "xz") {
              const geometry = this;
              (geometry.width = width),
                (geometry.height = height),
                (geometry.orientation = orientation),
                (geometry.attributes.position.values &&
                  geometry.attributes.position.values.length ===
                    3 * geometry.vertexCount) ||
                  (geometry.attributes.position.values = new Float32Array(
                    3 * geometry.vertexCount
                  ));
              const o = width / -2,
                r = height / -2,
                segment_width = width / geometry.xSegCount,
                segment_height = height / geometry.ySegCount;
              for (let yIndex = 0; yIndex <= geometry.ySegCount; yIndex++) {
                const t = r + yIndex * segment_height;
                for (let xIndex = 0; xIndex <= geometry.xSegCount; xIndex++) {
                  const r = o + xIndex * segment_width,
                    l = yIndex * (geometry.xSegCount + 1) + xIndex;
                  (geometry.attributes.position.values[
                    3 * l + "xyz".indexOf(orientation[0])
                  ] = r),
                    (geometry.attributes.position.values[
                      3 * l + "xyz".indexOf(orientation[1])
                    ] = -t);
                }
              }
              geometry.attributes.position.update(),
                _miniGl.debug("Geometry.setSize", {
                  position: geometry.attributes.position,
                });
            }
          },
        },
        Mesh: {
          enumerable: !1,
          value: class {
            constructor(geometry, material) {
              const mesh = this;
              (mesh.geometry = geometry),
                (mesh.material = material),
                (mesh.wireframe = !1),
                (mesh.attributeInstances = []),
                Object.entries(mesh.geometry.attributes).forEach(
                  ([e, attribute]) => {
                    mesh.attributeInstances.push({
                      attribute: attribute,
                      location: attribute.attach(e, mesh.material.program),
                    });
                  }
                ),
                _miniGl.meshes.push(mesh),
                _miniGl.debug("Mesh.constructor", {
                  mesh: mesh,
                });
            }
            draw() {
              context.useProgram(this.material.program),
                this.material.uniformInstances.forEach(
                  ({ uniform: e, location: t }) => e.update(t)
                ),
                this.attributeInstances.forEach(
                  ({ attribute: e, location: t }) => e.use(t)
                ),
                context.drawElements(
                  this.wireframe ? context.LINES : context.TRIANGLES,
                  this.geometry.attributes.index.values.length,
                  context.UNSIGNED_SHORT,
                  0
                );
            }
            remove() {
              _miniGl.meshes = _miniGl.meshes.filter((e) => e != this);
            }
          },
        },
        Attribute: {
          enumerable: !1,
          value: class {
            constructor(e) {
              (this.type = context.FLOAT),
                (this.normalized = !1),
                (this.buffer = context.createBuffer()),
                Object.assign(this, e),
                this.update();
            }
            update() {
              void 0 !== this.values &&
                (context.bindBuffer(this.target, this.buffer),
                context.bufferData(
                  this.target,
                  this.values,
                  context.STATIC_DRAW
                ));
            }
            attach(e, t) {
              const n = context.getAttribLocation(t, e);
              return (
                this.target === context.ARRAY_BUFFER &&
                  (context.enableVertexAttribArray(n),
                  context.vertexAttribPointer(
                    n,
                    this.size,
                    this.type,
                    this.normalized,
                    0,
                    0
                  )),
                n
              );
            }
            use(e) {
              context.bindBuffer(this.target, this.buffer),
                this.target === context.ARRAY_BUFFER &&
                  (context.enableVertexAttribArray(e),
                  context.vertexAttribPointer(
                    e,
                    this.size,
                    this.type,
                    this.normalized,
                    0,
                    0
                  ));
            }
          },
        },
      });
    const a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    _miniGl.commonUniforms = {
      projectionMatrix: new _miniGl.Uniform({
        type: "mat4",
        value: a,
      }),
      modelViewMatrix: new _miniGl.Uniform({
        type: "mat4",
        value: a,
      }),
      resolution: new _miniGl.Uniform({
        type: "vec2",
        value: [1, 1],
      }),
      aspectRatio: new _miniGl.Uniform({
        type: "float",
        value: 1,
      }),
    };
  }
  setSize(e = 640, t = 480, e1 = 640, t1 = 480) {
    (this.width = e),
      (this.height = t),
      (this.canvas.width = e1),
      (this.canvas.height = t1),
      this.gl.viewport(0, 0, e1, t1),
      (this.commonUniforms.resolution.value = [e1, t1]),
      (this.commonUniforms.aspectRatio.value = e1 / t1),
      this.debug("MiniGL.setSize", {
        width: e,
        height: t,
      });
  }
  //left, right, top, bottom, near, far
  setOrthographicCamera(e = 0, t = 0, n = 0, i = -2e3, s = 2e3) {
    (this.commonUniforms.projectionMatrix.value = [
      2 / this.width,
      0,
      0,
      0,
      0,
      2 / this.height,
      0,
      0,
      0,
      0,
      2 / (i - s),
      0,
      e,
      t,
      n,
      1,
    ]),
      this.debug(
        "setOrthographicCamera",
        this.commonUniforms.projectionMatrix.value
      );
  }
  render() {
    this.gl.clearColor(0, 0, 0, 0),
      this.gl.clearDepth(1),
      this.meshes.forEach((e) => e.draw());
  }
}
