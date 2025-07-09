import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList Component', () => {
  const sampleTasks = [
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Read book', completed: true },
  ];

  test('renders all tasks correctly', () => {
    render(<TaskList tasks={sampleTasks} toggleTask={() => {}} deleteTask={() => {}} />);
    expect(screen.getByText('Buy milk')).toBeInTheDocument();
    expect(screen.getByText('Read book')).toBeInTheDocument();
  });

  test('strikes through completed task', () => {
    render(<TaskList tasks={sampleTasks} toggleTask={() => {}} deleteTask={() => {}} />);
    const completedTask = screen.getByText('Read book');
    expect(completedTask).toHaveClass('completed');
  });

  test('calls toggleTask on span click', () => {
    const toggleMock = jest.fn();
    render(<TaskList tasks={sampleTasks} toggleTask={toggleMock} deleteTask={() => {}} />);
    const task = screen.getByText('Buy milk');
    fireEvent.click(task);
    expect(toggleMock).toHaveBeenCalledWith(1);
  });

  test('calls deleteTask on delete button click', () => {
    const deleteMock = jest.fn();
    render(<TaskList tasks={sampleTasks} toggleTask={() => {}} deleteTask={deleteMock} />);
    const deleteBtn = screen.getAllByText('X')[0]; // get first delete button
    fireEvent.click(deleteBtn);
    expect(deleteMock).toHaveBeenCalledWith(1);
  });
});
