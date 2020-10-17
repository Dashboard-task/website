import React, { useState } from 'react';
import TopicContext from "../../contexts/topic-contexts";

/**
 * Contexte Provider des thèmes.
 * @param props 
 */
const TopicContextProvider: React.FC = (props) => {
  const [topic, setTopic] = useState<string | null>(null);

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {props.children}
    </TopicContext.Provider>
  )
}

export default TopicContextProvider;
