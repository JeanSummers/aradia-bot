declare module 'agent-base' {
    import http from 'http';
    export interface Agent extends http.Agent {
        options: http.AgentOptions;
    }
    export interface AgentOptions extends http.AgentOptions{}
}