import React from "react";
import { TopicData } from "../util/types/data-types";

interface TopicContextState {
    topic: TopicData;
    setTopic: (idTopic: TopicData) => void;
}

const TopicContext = React.createContext<TopicContextState>({ topic: null, setTopic: null });

export default TopicContext;
