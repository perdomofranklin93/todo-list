import React from "react";
import { useCRUD } from "../hooks/CRUD";
import { renderHook, act } from "@testing-library/react-hooks";

describe("CRUD hook testing", () => {
  test("should initial values is ok, modality = 'view' and crud = 'normal'", () => {
    const { result } = renderHook(() => useCRUD());
    expect(result.current.crud).toBe("normal");
    expect(result.current.modality).toBe("view");
  });

  test("should values changes after trigger editionMode, modality = 'input' and crud = 'edit'", () => {
    const { result } = renderHook(() => useCRUD());
    act(() => {
      result.current.editionMode();
    });
    expect(result.current.crud).toBe("edit");
    expect(result.current.modality).toBe("input");
  });

  test("should values changes after trigger creationMode, modality = 'input' and crud = 'create'", () => {
    const { result } = renderHook(() => useCRUD());
    act(() => {
      result.current.creationMode();
    });
    expect(result.current.crud).toBe("create");
    expect(result.current.modality).toBe("input");
  });

  test("should crud value delete, after trigger deleteMode", () => {
    const { result } = renderHook(() => useCRUD());
    act(() => {
      result.current.deleteMode();
    });
    expect(result.current.crud).toBe("_delete");
  });
});
