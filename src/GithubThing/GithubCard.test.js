import { render, screen } from '@testing-library/react';
import gCard from './GithubCard';
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
    const tree = renderer.create(<gCard/>).toJSON()
    expect(tree).toMatchSnapshot()
  })