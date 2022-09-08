import {renderHook, act} from '@testing-library/react-hooks';

describe("useSum", () => {
  it("should start with zero" , () => {
    const {result} = renderHook(() => useSum());
    expect(result.current.sum).toBe(0);
  });

});