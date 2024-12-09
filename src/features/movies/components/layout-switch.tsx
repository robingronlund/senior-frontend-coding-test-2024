import styled from '@emotion/styled';
import { Layout } from '../types/layout.types';
import { useContext } from 'react';
import { MovieContext } from '../context/movies.context';

const SwitchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
  justify-content: center;

  & p {
    margin: 0;
  }
`;

export const LayoutSwitch = () => {
  const { layout, setLayout } = useContext(MovieContext);

  return (
    <SwitchContainer>
      <p>Select layout: </p>
      <label htmlFor='detailed-layout'>Detailed</label>
      <input
        type='radio'
        name='detailed-layout'
        value={Layout.Detailed}
        checked={layout === Layout.Detailed}
        onChange={() => setLayout(Layout.Detailed)}
      />
      <label htmlFor='layout-switch'>Compact</label>
      <input
        type='radio'
        name='compact-layout'
        value={Layout.Compact}
        checked={layout === Layout.Compact}
        onChange={() => setLayout(Layout.Compact)}
      />
    </SwitchContainer>
  );
};
