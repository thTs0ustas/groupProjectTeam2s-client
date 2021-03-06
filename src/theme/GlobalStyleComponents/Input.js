import styled from "styled-components";
import { Field } from "formik";
import { FloatingLabel, Form } from "react-bootstrap";

export const InputFieldContainer = styled.div`
  position: relative;
  margin-top: 5px;
`;

export const InputError = styled.div`
  position: absolute;
  top: -12px;
  color: ${({ theme }) => theme.logo};
  font-weight: bold;
`;
export const InputField = styled(Field)`
  max-width: 418px;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  border: 0;
  width: 100%;
  height: 45px;
  border-radius: 1px;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
  margin-top: 10px;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.dark} inset !important;
    -webkit-text-fill-color: #fcfcfc !important;
    caret-color: aliceblue;
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.white};
  }

  ::-moz-placeholder {
    color: ${({ theme }) => theme.white};
  }

  &:first-child {
    margin-bottom: 10px;
  }

  &:focus {
    background-color: ${({ theme }) => theme.bgMain};
    color: ${({ theme }) => theme.white};
    border: 2px solid ${({ theme }) => theme.primary};

    ::-moz-placeholder {
      color: rgba(0, 0, 0, 0);
    }

    ::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0);
    }
  }
`;
export const SelectContainer = styled(FloatingLabel)`
  width: 20%;
  margin: 0 3px;
`;
export const Input = styled(Form.Select)`
  background-color: ${({ theme }) => theme.primary};
  color: black;
  border: 0;
  width: 100%;
  height: 100%;
  border-radius: 1px;
  &:disabled {
    background-color: ${({ theme }) => theme.secondary};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.primary} inset !important;
    -webkit-text-fill-color: #000 !important;
    caret-color: aliceblue;
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.white};
  }

  ::-moz-placeholder {
    color: ${({ theme }) => theme.white};
  }

  &:focus {
    background-color: ${({ theme }) => theme.secondary};
    color: black;
    border: 2px solid ${({ theme }) => theme.primary};

    ::-moz-placeholder {
      color: rgba(0, 0, 0, 0);
    }
    ::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0);
    }
  }
  & option {
    color: black;
  }
`;
