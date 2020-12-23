import AvatarGeometric from './avatar/components/avatar-geometric';
import Playground from './playground';

function App() {
  return (
    <div>
      <Playground />
      <AvatarGeometric
        colors={['red', 'blue']}
        size={24}
        variant="geometric"
        name="Amanda"
      />
    </div>
  );
}

export default App;
