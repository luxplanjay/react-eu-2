import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { StyledForm, FormGroup, Input, ErrorMsg } from './RecipeForm.styled';

const RecipeSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('Required'),
  image: Yup.string().url('Must be a valid url!').required('Required'),
  time: Yup.number().positive('> 0 PLZ!').required('Required'),
  servings: Yup.number().positive('> 0 PLZ!').required('Required'),
  calories: Yup.number().positive('> 0 PLZ!').required('Required'),
  difficulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'], 'Must be one of (e m h)')
    .required('Required'),
});

export const RecipeForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        image: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy',
      }}
      validationSchema={RecipeSchema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FormGroup>
          Name
          <Input type="text" name="name" placeholder="Recipe name" />
          <ErrorMsg name="name" component="span" />
        </FormGroup>

        <FormGroup>
          Image
          <Input type="text" name="image" placeholder="Recipe image" />
          <ErrorMsg name="image" component="span" />
        </FormGroup>

        <FormGroup>
          Time
          <Input type="number" name="time" placeholder="Time" />
          <ErrorMsg name="time" component="span" />
        </FormGroup>
        <FormGroup>
          Servings
          <Input type="number" name="servings" placeholder="Servings" />
          <ErrorMsg name="servings" component="span" />
        </FormGroup>
        <FormGroup>
          Calories
          <Input type="number" name="calories" placeholder="Calories" />
          <ErrorMsg name="calories" component="span" />
        </FormGroup>

        <FormGroup>
          Difficulty
          <Field name="difficulty" as="select">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
          <ErrorMsg name="difficulty" component="span" />
        </FormGroup>

        <button type="submit">Add recipe</button>
      </StyledForm>
    </Formik>
  );
};
