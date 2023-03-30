Iframe example: https://ld15l5.csb.app/
Codesandbox: https://codesandbox.io/s/suspicious-gates-ld15l5?file=/index.html



Links to integrate: 
https://calendly.com/oneshot_ai/oneshot-demo?month=2023-03

https://oneshot.typedream.app/


Tasks:
[X] Convert the conversion rate texts to questions -> Suppose you have 100 leads. How many meetings do you want?
[X] In results show the output data with proper message
[X] In circle show leads and email both
[X] Handle wrong input errors
[X] Change warning to some different message
[X] Change the text "Want to try oneshot?" to "Feeling tideous with sending emails?" or similar text
[X] Remove text under the question "Want to try oneshot?"
[X] Convert "Chat with us" to "Book a demo"
[X] Change the link in "Book a demo"
[X] Check the colors with oneshot.typedream.app
[X] Make sure input values cannot be negative
[X] Remove everything from the page just keep the actual calculator


[] On first render blur the whole app
[] On the blurred section show a text and a button, text -> "Want to know how much activity you have to do?", button -> Yes
[] Blur RHS and on the blurred section show a CTA to ask user if the inputs are correct
[] If user confirms then show a loader for few seconds and reveal the output
[] With each time input changes show a loader for few seconds and then reveal the output


Change iframe look > Publish > Resource only

<style>
    @media(max-width: 768px){
        #activity_calculator__custom_container{
            height: fit-content;
        }
    }
</style>