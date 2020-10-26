import React, { useState } from 'react';
import TopicContext from "../../contexts/topic-contexts";
import { TopicData } from '../../util/types/data-types';

/**
 * Contexte Provider des thèmes.
 * @param props 
 */
const TopicContextProvider: React.FC = (props) => {
  const [topic, setTopic] = useState<TopicData>();

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {props.children}
    </TopicContext.Provider>
  )
}

export default TopicContextProvider;
