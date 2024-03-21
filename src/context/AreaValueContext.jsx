import React, { createContext, useContext, useState } from "react";

const AreaValueContext = createContext();

export const useAreaValueContext = () => {
  return useContext(AreaValueContext);
};

const baseValue = `
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Bold, Italic, and Strikethrough Text

**Bold Text**  
*Italic Text*  
~~Strikethrough Text~~  

---

## Lists

### Unordered List
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

### Ordered List
1. First item
2. Second item
   - Subitem A
   - Subitem B

---

## Blockquotes

> This is a blockquote.

---

## Links

[Link Text](https://www.example.com)

---

## Images

![Alternative text for image](https://via.placeholder.com/150)

---

## Code

\`\`\`javascript
const greeting = "Hello, world!";
console.log(greeting);
\`\`\`

---

## Tables

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

---

## Tasks

- [x] Completed Task
- [ ] Incomplete Task

---

## Horizontal Rules

---

## Notes

This is an example of Markdown text with various features.
`;

export default baseValue;


export const AreaValueProvider = ({ children }) => {
  const storedValue = localStorage.getItem("value");
  const [value, setValue] = useState(storedValue !== null ? storedValue : baseValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem("value", newValue);
};

  const handleReset = () => {
    setValue('');
    localStorage.removeItem("value");
  }
  


  return (
    <AreaValueContext.Provider value={{ value, handleChange, handleReset, baseValue }}>
      {children}
    </AreaValueContext.Provider>
  );
};
