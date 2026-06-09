import React from "react";

const ReactNotes = () => {
  return (
    <section className="max-w-4xl mx-auto shadow-md p-6">
      <h1>ReactNotes</h1>
      <div className="m-1 p-1">
        <h3>VS Code Shortcuts</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ctrl + Shft + P:</td>
              <td>Command palette</td>
            </tr>
            <tr>
              <td>Ctrl + P:</td>
              <td>Quick open</td>
            </tr>
            <tr>
              <td>Ctrl + J:</td>
              <td>Show/Hide bottom panel</td>
            </tr>
            <tr>
              <td>Ctrl + B:</td>
              <td>Toggle sidebar</td>
            </tr>
            <tr>
              <td>Ctrl + .</td>
              <td>Auto import selected component</td>
            </tr>
            <tr>
              <td>Ctrl + `:</td>
              <td>Open editor</td>
            </tr>
            <tr>
              <td>Ctrl + D:</td>
              <td>Multi-Select Cursor</td>
            </tr>
            <tr>
              <td>Ctrl + L:</td>
              <td>
                Select all items that match the selected/cursor-adjacent item
              </td>
            </tr>
            <tr>
              <td>Shift + Alt + up/down:</td>
              <td>Copy line</td>
            </tr>
            <tr>
              <td>Ctrl + T:</td>
              <td>Show all symbols</td>
            </tr>
            <tr>
              <td>Ctrl + Space:</td>
              <td>Trigger suggestion and Trigger parameter hints</td>
            </tr>
            <tr>
              <td>Ctrl + Shift + F:</td>
              <td>Global find</td>
            </tr>
            <tr>
              <td>Ctrl + W:</td>
              <td>Close current file</td>
            </tr>
            <tr>
              <td>code .</td>
              <td>Open current folder in VS Code</td>
            </tr>
            <tr>
              <td>Ctrl + X</td>
              <td>Delete current line</td>
            </tr>
          </tbody>
        </table>

        <h3>React Extension Shortcuts</h3>
        <table>
          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cc</td>
              <td>Class component</td>
            </tr>
            <tr>
              <td>ffc</td>
              <td>Function syntax component</td>
            </tr>
            <tr>
              <td>Ctrl + Shft + L</td>
              <td>Select all instances of the selected item</td>
            </tr>
            <tr>
              <td>F2</td>
              <td>
                Change text for selected item and all other instances of the
                same value and class
              </td>
            </tr>
            <tr>
              <td>F12 or Ctrl + Shft + I</td>
              <td>Inspect and open console</td>
            </tr>
            <tr>
              <td>Ctrl + Select item</td>
              <td>Go to definition (if it exists)</td>
            </tr>
            <tr>
              <td>Ctrl + Shft + [/]</td>
              <td>Close/open code block</td>
            </tr>
            <tr>
              <td>Ctrl + Shft + T</td>
              <td>Reopen last closed file</td>
            </tr>
            <tr>
              <td>Ctrl + Alt + Up/Down</td>
              <td>Multiline cursor</td>
            </tr>
            <tr>
              <td>Ctrl + ,</td>
              <td>Open settings</td>
            </tr>
            <tr>
              <td>Alt + Up/Down</td>
              <td>Move row up/down</td>
            </tr>
            <tr>
              <td>Alt + Click</td>
              <td>Manually place cursor at multiple locations</td>
            </tr>
            <tr>
              <td>Ctrl + Tab</td>
              <td>Go to different open file</td>
            </tr>
            <tr>
              <td>rafce</td>
              <td>Create react functional component</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReactNotes;
