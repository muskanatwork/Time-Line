 import Heading from "./Heading"
 import Time from "./Timeline"

const App = () => {
    return (
        <div>
        <Heading/>
        <Time year = {2003} event = "I was born"/>
        <Time year = {2014} event = "I was playing on the road and I fell on the road."/>
        <Time year = {2023} event = " When I had to come to the hostel, I had sat the wrong bus."/>
        <Time year = {2023} event = "When I was going to Langha temple, I fell on the mountain."/>
        <Time year = {2019} event = "I was going to the kitchen and fell on the stairs."/>

        </div>
    )
}

export default App


