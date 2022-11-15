const Person = ({ person }) => {
  return (
    <div>
      {`Hey my name is ${person.name} , I am ${person.age} old, I am good at ${person.skill}`}{" "}
    </div>
  );
};

export default Person;
