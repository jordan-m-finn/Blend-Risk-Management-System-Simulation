import { BigNumber } from 'ethers';
import { Address, Token, VaultId } from './vault.types';

/** Why rebalancing was triggered */
export interface RebalanceTrigger {
    readonly healthFactor: string; // string type chosen for JSON serialization
    readonly threshold: string;
    readonly reason: string;
}

/** Current state before rebalancing */
export interface RebalanceCurrentState {
    readonly collateral: {
        readonly asset: string;
        readonly amount: string;
        readonly valueUsd: number;
    };
    readonly debt: {
        readonly asset: string;
        readonly amount: string;
        readonly valueUsd: number;
    };
}

/**
 * Discriminated union for different action types
 * Pure type safety
 **/
export type RebalanceAction = 
    | WithdrawCollateralAction
    | SwapAction
    | RepayDebtAction;

export interface WithdrawCollateralAction {
    readonly step: number;
    readonly type: 'withdrawCollateral';
    readonly amount: string;
    readonly reason: string;
}

export interface SwapAction {
    readonly step: number;
    readonly type: 'swap';
    readonly fromToken: string;
    readonly fromAmount: string;
    readonly toToken: string;
    readonly expectedAmount: string;
    readonly minAmount: string;
    readonly slippage: string;
    readonly dex: string;
    readonly route: string;
}

export interface RepayDebtAction {
    readonly step: number;
    readonly type: 'repayDebt';
    readonly asset: string;
    readonly amount: string;
    readonly reason: string;
}

/** Projected outcome after execution */
export interface ProjectedOutcome {
    readonly newCollateralAmount: string;
    readonly newDebtAmount: string;
    readonly estimatedHealthFactor: nubmer;
    readonly gasEstimate: string;
}

/** How this would execute atomically on-chain */
export interface AtomicExecution {
    readonly type: 'multicall' | 'bundler' | 'flashloan';
    readonly bundlerCompatible?: string; // specifically for Morpho Bundler 3
    readonly calldata?: string; 
}

/** The complete execution plan */
export interface ExecutionPlan {
    readonly targetHealthFactor: number;
    readonly actions: RebalanceAction[];
    readonly ProjectedOutcome: ProjectedOutcome;
    readonly atomicExecution: AtomicExecution;
}

/** The full rebalancing plan matching the spec */
export interface RebalancingPlan {
    readonly vaultId: string;
    readonly timestamp: string;
    readonly trigger: RebalanceTrigger;
    readonly currentState: RebalanceCurrentState;
    readonly executionPlan: ExecutionPlan;
}
