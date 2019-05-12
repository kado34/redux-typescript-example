// 発行したいアクションの内容の定義と、アクションを返すActionCreaterの作成

export enum CounterActionType {
  ADD_COUNT = 'ADD_COUNT',
  RESET_COUNT = 'RESET_COUNT',
}

export interface CounterAction {
  type: CounterActionType;
  value?: number;
}

export const addCount = (value: number): CounterAction => ({
  type: CounterActionType.ADD_COUNT,
  value,
});

export const reset = (): CounterAction => ({
  type: CounterActionType.RESET_COUNT,
});
