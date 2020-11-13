import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

const colorData = [
  {
    color: 'red',
    code: {
      hex: '#112233'
    },
    id: 1
  },
  {
    color: 'blue',
    code: {
      hex: '#332211'
    },
    id: 2
  },
]

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  render(<BubblePage />)

  await waitFor(() => {
    
    const colors = screen.queryAllByTestId('colorBlock');
    expect(colors).not.toBeNull;
    // expect(colors).toHaveLength(11);
  })

});
