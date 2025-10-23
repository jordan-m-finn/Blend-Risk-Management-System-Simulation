/** Standard API response wrapper */
export interface ApiResponse<T> {
    readonly success: boolean;
    readonly data?: T,
    readonly error?: ApiError;
    readonly timestamp: string;
}

export interface ApiError {
    readonly code: string;
    readonly message: string;
    readonly details?: unknown;
}

/** GET /vaults response */
export interface VaultsResponse {
    readonly vaults: VaultWithHealth[];
    readonly totalCount: number;
}

/** GET /vaults/:id response */
export interface VaultDetailResponse extends VaultWithHealth {
    readonly history: VaultSnapshot[];
}

/** POST /simulate response */
export interface SimulationResponse {
    readonly status: 'started' | 'running' | 'stopped';
    readonly message: string;
    readonly currentIteration?: number;
}

/** GET /rebalances response */
export interface RebalancesResponse {
    readonly events: RebalancingPlan[];
    readonly totalCount: number;
}
