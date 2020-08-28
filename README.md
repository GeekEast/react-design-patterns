## Advanced React Design Patterns

### Compound Components
- Without Compound Components
```javascript
// declaration
const Toggle = () => {
  const [on, setOn] = useState(false);
  return (
    <div>
      <Switch onClick={() => setOn(!on)} on={on} />
    </div>
  );
};

// usage: cannot reuse Switch multiple times.
const App = () => <Toggle/>;
```
- With Compound Components
```javascript
// declaration
const Toggle = ({ children, className }: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [on, setOn] = useState(false);
  return (
    <ToggleContext.Provider value={{ on, setOn }}>
      <div className={className}>{children}</div>
    </ToggleContext.Provider>
  );
};

// usage: very easy to reuse
const App = () => {
  return (
    <div className="flex">
      <Toggle>
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
      </Toggle>
      <Toggle>
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
      </Toggle>
    </div>
  );
};
```
- Context API: **Even Toggle1 and Toggle2 use the same ToggleContext, their data is not twisted.**
```javascript
const App = () => {
  return (
    <div className="flex">
      // Toggle1
      <Toggle>
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
      </Toggle>
      // Toggle2
      <Toggle>
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
      </Toggle>
    </div>
  );
};
```