import {renderHook, act} from '@testing-library/react-hooks';

import {useSum} from './useSum';

describe("useSum", () => {
  it("should start with zero" , () => {
    const {result} = renderHook(() => useSum());
    expect(result.current.sum).toBe(0);
  });

});