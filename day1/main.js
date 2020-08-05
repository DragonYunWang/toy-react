import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>hello</span>
        <span>world</span>
        <span>!</span>
        <div>
          {this.children}
          {false}
        </div>
      </div>
    )
  }
}

let a = (
  <MyComponent name='a' id='id'>
    <div>cyan</div>
  </MyComponent>
)
console.log('a', a)
console.log('MyComponent -> a', a)

ToyReact.render(a, document.getElementsByTagName('body')[0])

// ToyReact.createElement(MyComponent, {
//   name: 'a',
// })
