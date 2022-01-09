import { readable, writable } from "svelte/store";

export const meshId = writable(757);

/*----------------------------------------------------------------
      --gradient-color-1: #eb75b6;
      --gradient-color-2: #ddf3ff;
      --gradient-color-3: #6e3deb;
      --gradient-color-4: #c92f3c;
*/
export const inputColors = writable([
  "#eb75b6",
  "#ddf3ff",
  "#6e3deb",
  "#c92f3c",
]);

/*----------------------------------------------------------------
Presets - 
['#4dffb2', '#ddf3ff', '#0ff5da', '#507ce2'] 833
['#ff4d4d', '#fff2db', '#fbff1a', '#ff7024'] 759, 20
['#ff004c', '#ffdb9e', '#fbff1a', '#ff7024'] 98
['#ff004c', '#ffdb9e', '#00d6b3', '#66d1ff'] 102, 679
['#0033ff', '#6f3467', '#b8fff7', '#66d1ff'] 527
['#1ac737', '#61ffb5', '#fdff80', '#008f58'] 276
*/
export const presets = readable([
  {
    meshId: 833,
    meshColors: ["#4dffb2", "#ddf3ff", "#0ff5da", "#507ce2"],
  },
  {
    meshId: 759,
    meshColors: ["#ff4d4d", "#fff2db", "#fbff1a", "#ff7024"],
  },
  {
    meshId: 98,
    meshColors: ["#ff004c", "#ffdb9e", "#fbff1a", "#ff7024"],
  },
  {
    meshId: 679,
    meshColors: ["#ff004c", "#ffdb9e", "#00d6b3", "#66d1ff"],
  },
  {
    meshId: 527,
    meshColors: ["#0033ff", "#6f3467", "#b8fff7", "#66d1ff"],
  },
  {
    meshId: 276,
    meshColors: ["#1ac737", "#fdff80", "#18d6fb", "#008f58"],
  },
]);
