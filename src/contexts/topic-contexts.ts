import React from "react";

interface TopicContextState {
    topic: string | null;
    setTopic: ((idTopic: string) => void) | null;
}

const TopicContext = React.createContext<TopicContextState>({ topic: null, setTopic: null });

export default TopicContext;
