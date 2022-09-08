import { renderHook, act } from '@testing-library/react-hooks'

import {useSum} from './useSum';

describe("useSum", () => {
  it("should start with zero" , () => {
    const {result} = renderHook(() => useSum());
    act(() => {
      result.current.add(10);
    })
    act(()=> {
      result.current.add(20);
    })
    expect(result.current.sum).toBe(30);
  });

});
