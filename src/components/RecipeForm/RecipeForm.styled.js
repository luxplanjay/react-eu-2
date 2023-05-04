import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
  padding: 8px;
  border: 1px solid black;
`;

export const Input = styled(Field)`
  padding: 4px;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 12px;
`;
