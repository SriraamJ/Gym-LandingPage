import POWER from '../../assets/photos/strength.jpeg'
import YOGA from '../../assets/photos/yoga.jpeg'
import SPINNING from '../../assets/photos/spinning.jpeg'
import BOX from '../../assets/photos/boxing.jpeg'

const classesByDay = {
    Monday: [
        { name: 'Morning', time: '8:00 AM - 9:00 AM', img:POWER },
        { name: 'Evening', time: '1:00 PM - 2:00 PM', img:SPINNING }
      ],
      Tuesday: [
        { name: 'Morning', time: '8:00 AM - 9:00 AM', img:POWER },
        { name: 'Evening', time: '1:00 PM - 2:00 PM', img:BOX }
      ],
      Wednesday: [
        { name: 'Morning', time: '7:00 AM - 8:00 AM', img:BOX },
        { name: 'Eveing', time: '6:00 PM - 7:00 PM', img:SPINNING },
      ],
      Thursday: [
        { name: 'Morning', time: '8:00 AM - 9:00 AM', img:POWER },
        { name: 'Evening', time: '1:00 PM - 2:00 PM', img:SPINNING }
      ],
      Friday: [
        { name: 'Morning', time: '8:00 AM - 9:00 AM', img:POWER },
        { name: 'Evening', time: '1:00 PM - 2:00 PM', img:BOX }
      ],
      Saturday: [
        { name: 'Morning', time: '7:00 AM - 8:00 AM', img:BOX },
        { name: 'Eveing', time: '6:00 PM - 7:00 PM', img:SPINNING },
      ],
      Sunday: [
        { name: 'Holiday', time: '-:-- AM - -:-- PM',img:YOGA },
      ]
  };

export default classesByDay;