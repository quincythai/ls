import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * 1. Define the shape of our context’s value.
 */
interface SourceDictContextValue {
  getFootnoteIndex: (source: string) => number;
  getAllFootnotes: () => Record<string, string>;
}

/**
 * 2. Create a context object with a default value.
 *    (The default is usually not used, but is required by TypeScript.)
 */
const SourceDictContext = createContext<SourceDictContextValue>({
  getFootnoteIndex: () => 0,
  getAllFootnotes: () => ({}),
});

/**
 * 3. Create a Provider component that holds our state and functions.
 */
export const SourceDictProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sourceDict, setSourceDict] = useState<Record<string, string>>({});

  /**
   * Checks if the source is in sourceDict; if not, assigns a new index.
   * Returns the index (1-based) corresponding to that source.
   */
  const getFootnoteIndex = (source: string): number => {
    // Check if the source is already present in sourceDict.
    for (const key of Object.keys(sourceDict)) {
      if (sourceDict[key] === source) {
        return parseInt(key, 10);
      }
    }

    // If not found, create a new index.
    const newIndex = Object.keys(sourceDict).length + 1;

    // Update state with a new key-value pair.
    setSourceDict((prev) => ({
      ...prev,
      [newIndex]: source,
    }));

    return newIndex;
  };

  /**
   * Returns a shallow copy of the internal sourceDict state.
   */
  const getAllFootnotes = (): Record<string, string> => {
    return { ...sourceDict };
  };

  return (
    <SourceDictContext.Provider value={{ getFootnoteIndex, getAllFootnotes }}>
      {children}
    </SourceDictContext.Provider>
  );
};

/**
 * 4. A custom hook to access the context’s values.
 *    E.g., `const { getFootnoteIndex, getAllFootnotes } = useSourceDict();`
 */
export const useSourceDict = (): SourceDictContextValue => {
  return useContext(SourceDictContext);
};
