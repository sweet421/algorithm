//设计一个支持push,pop,top操作，并能在常数时间内检索到最小元素的栈
/**
 * push(x) --将元素x推入栈中
 * pop() --删除栈顶的元素
 * top() --获取栈顶元素
 * getMin() --检索栈中最小的元素
 */
const MinStack = function(){
    this.stack = [];
    this.minStack = [];
}
MinStack.prototype.push = function(x){
    this.stack.push(x);
    if(this.minStack.length === 0){
        this.minStack.push(x);
    }else{
        const min = Math.min(this.minStack[this.minStack.length - 1],x);
        this.minStack.push(min);
    }
}
MinStack.prototype.pop = function(){
    this.minStack.pop();
    return this.stack.pop();
}
MinStack.prototype.top = function(){
    return this.stack[this.stack.length - 1];
}
MinStack.prototype.getMin = function(){
    return this.minStack[this.minStack.length - 1];
} 
var newStack = new MinStack();
newStack.push(1);
newStack.push(100);
newStack.push(40);
console.log(newStack)

