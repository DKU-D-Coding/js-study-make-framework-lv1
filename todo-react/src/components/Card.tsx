import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  MdClose,
  MdDone,
  MdEdit,
  MdOutlineCheckCircleOutline,
  MdHighlightOff,
} from "react-icons/md";
import styled from "styled-components";
import { Todo } from "todo";

const Wrapper = styled.li<{ done: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  display: flex;
  background-color: ${({ done }) => (done ? "#2c3e50" : "#fff")};
  color: ${({ done }) => (done ? "#fff" : "#2c3e50")};
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
`;

const TitleContainer = styled.div``;

const CreatedAt = styled.span`
  font-size: 0.8rem;
  color: inherit;
  opacity: 0.5;
`;

const ControlContainer = styled.div<{ done: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  svg {
    transition: all 0.2s ease-in-out;
    color: inherit;
    cursor: pointer;
    font-size: 2.5rem;
    padding: 0.5rem;
    border-radius: 9999px;
    :hover {
      background-color: ${({ done }) => (done ? "#fff" : "#2c3e50")};
      color: ${({ done }) => (done ? "#2c3e50" : "#fff")};
    }
    :last-child:hover {
      background-color: #e74c3c;
      color: #fff;
    }
  }
`;

const NewTodoForm = styled.form``;

const NewTodoInput = styled.input.attrs({
  type: "text",
  required: true,
  maxLength: 20,
})`
  all: unset;
`;

const Title = styled.h3``;

interface CardProps extends Todo {
  edit: (id: number, newTitle: string) => void;
  del: (id: number) => void;
  toggleDone: (id: number) => void;
}

const Card = ({
  title,
  createdAt,
  id,
  completed,
  edit,
  del,
  toggleDone,
}: CardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditTitle = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(value);
  };

  const toggleEdit = useCallback(() => {
    if (newTitle !== title) setNewTitle(title);
    setIsEditing((value) => !value);
  }, [newTitle, title]);

  const submitEditedTitle = useCallback(
    (e?: React.FormEvent<HTMLFormElement>) => {
      e?.preventDefault();
      edit(id, newTitle);
      toggleEdit();
    },
    [edit, id, newTitle, toggleEdit]
  );

  const todoContent = useMemo(
    () =>
      isEditing ? (
        <NewTodoForm onSubmit={submitEditedTitle}>
          <NewTodoInput
            ref={inputRef}
            value={newTitle}
            onChange={handleEditTitle}
          />
        </NewTodoForm>
      ) : (
        <Title>{title}</Title>
      ),
    [isEditing, newTitle, submitEditedTitle, title]
  );

  const controllers = useMemo(
    () =>
      isEditing ? (
        <>
          <MdOutlineCheckCircleOutline onClick={() => submitEditedTitle()} />
          <MdHighlightOff onClick={toggleEdit} />
        </>
      ) : (
        <>
          <MdEdit onClick={toggleEdit} />
          <MdDone onClick={() => toggleDone(id)} />
          <MdClose onClick={() => del(id)} />
        </>
      ),
    [isEditing, toggleEdit, submitEditedTitle, toggleDone, id, del]
  );

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  return (
    <Wrapper done={completed}>
      <TitleContainer>
        {todoContent}
        <CreatedAt>{createdAt.toLocaleDateString()}</CreatedAt>
      </TitleContainer>
      <ControlContainer done={completed}>{controllers}</ControlContainer>
    </Wrapper>
  );
};

export default Card;
