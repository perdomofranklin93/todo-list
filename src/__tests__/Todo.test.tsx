import React from "react";
import TestRenderer, { act, create } from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from "@testing-library/react";
import { Todo } from "../pages/home/features";

describe("todo component", () => {
  test("todo component render", () => { 
    let component;
    act(() => {
      component = create(<Todo data={{id: "", text: "", completed: false}} />);
    });

    console.log(component)
  });
});
