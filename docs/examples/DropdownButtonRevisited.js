const handleSelect = (event, selectEvent) => {
  console.log(`SELECTED ${selectEvent.eventKey}`);
};

const buttonsInstance = (
  <div>
    <input placeholder='Before' type='text' />
    <DropdownButtonRevisited onSelect={handleSelect}>
      <DropdownButtonRevisited.Title>Custom Title</DropdownButtonRevisited.Title>
      <MenuItemRevisited eventKey='1'>Action</MenuItemRevisited>
      <MenuItemRevisited header>Some Header</MenuItemRevisited>
      <MenuItemRevisited eventKey='2'>Another action</MenuItemRevisited>
      <MenuItemRevisited eventKey='3'>Something else here</MenuItemRevisited>
      <MenuItemRevisited divider />
      <MenuItemRevisited eventKey='4'>Separated link</MenuItemRevisited>
    </DropdownButtonRevisited>
    <input placeholder='After' type='text' />
  </div>
);

React.render(buttonsInstance, mountNode);
