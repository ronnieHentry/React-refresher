# Event capturing and bubbling
Suppose we have 3 nested divs, a grandparent, parent and child. In bubbling, if the child is clicked, the event will go from child to parent to grandparent. It will bubble out i.e. click function of child will be called first, then parent and then grandparent.
In capturing, the opposite happens - it goes inward from grandparent to parent to child.

If parent is clicked, click of parent will be called and then grandparent for bubbling and in case of capturing, grandparent will be called then parent. 

It is up to the developer to use either event bubbling of event capturing. In the addEventListener method, first argument is the event, second is the event handler and third argument is a boolean which is for useCapture:

addEventListener("click", ()=> console.log"Hello", useCapture);

Default value for useCapture is false (if you dont pass any value) and event bubbling is done.
In case of event, the cycle of bubbling or capturing will continue, we can only control which happens first using useCapture method.