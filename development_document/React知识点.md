#### 一.React 基础知识点
#####1.1 简介

1.React 是 Facebook 在 2013 年开源在 GitHub 上的 JavaScript(网络的脚本语言) 库,React 把用户界面抽象成一个个组件，如按钮组件
  Button、对话框组件Dialog、日期组件 Calendar。开发者通过组合这些组件， 最终得到功能丰富、可交互的页面
2.每次数据更新后，重新计算 Virtual DOM(文档对象模型)，并和上一次生成的 Virtual DOM 做对比，对发生变化的部分做批量更新。React
  也提供了直观的shouldComponentUpdate 生命周期回调，来减少数据变化后不必要的 Virtual DOM 对比过程，以保证性能
3.函数式编程
 
#####1.2 React 组件的构建
1.React 组件基本上由 3 个部分组成——属性（props）、状态（state）以及生命周期方法
2.React 组件的构建方法
2.1. 使用React.createClass
    
    const Button = React.createClass({
        getDefaultProps() {
        return {
        color: 'blue',
        text: 'Confirm',
        };
        },
        render() {
        const { color, text } = this.props;
        return (
        <button className={`btn btn-${color}`}>
        <em>{text}</em>
        </button>
        );
        }
        });
    
    
2.2 ES6 classes 的写法
  
      class Button extends Component {
      constructor(props) {
      super(props);
      }
      static defaultProps = {
      color: 'blue',
      text: 'Confirm',
      };
      render() {
      const { color, text } = this.props;
      return (
      <button className={`btn btn-${color}`}>
      <em>{text}</em>
      </button>
      );
      }
      }
#####3.React 数据流  
1.Props（属性）:大多数组件在创建时就可以使用各种参数来进行定制。用于定制的这些参数就称为props
2.state:我们使用两种数据来控制一个组件：props和state。props是在父组件中指定，而且一经指定，
        在被指定的组件的生命周期中则不再改变。 对于需要改变的数据，我们需要使用state
        
3.样式：建议使用StyleSheet.create来集中定义组件的样式
4.flex(弹性宽高)：使用flex可以使其在可利用的空间中动态地扩张或收缩。一般而言我们会使用flex:1
        来指定某个组件扩张以撑满所有剩余的空间。如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间
        
        
5.flexbox布局:React Native 中使用 flexbox 规则来指定某个组件的子元素的布局。Flexbox 可以在不同屏幕尺寸上提供一致的布局结构
一般来说在组件style中指定如下有三个样式： 
            flexDirection：决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列
            alignItems：决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式
            justifyContent：决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布亦或应该均匀分布等
            
6.TextInput：允许用户输入文本的基础组件
7.ScrollView：通用的可滚动的容器，你可以在其中放入多个组件和视图
8.FlatList或是SectionList：适用于展示长列表数据的组件                  