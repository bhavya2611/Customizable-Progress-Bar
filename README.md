# Customizable Progress Bar

A completely customizable progress bar, with animation.

![Example progress bar image](https://github.com/bhavya2611/Customizable-Progress-Bar/blob/master/images/example1.png?raw=true)

## Installation

```sh
npm i --save customizable-progress-bar
```

## Import

```javascript
import ProgressBar from "customizable-progress-bar";
```

## Usage

The values given to props in the example below, are also the default parameters.

```javascript
import ProgressBar from "customizable-progress-bar";

const ProgressBarComponent = () => {
  return (
    <div style={{ padding: 50, width: 400 }}>
      <ProgressBar
        slideIn={true} //Possible values true, false
        barHeight={30} //Possible value any number
        labelSize={"medium"} //Possible any number or small, medium, large, x-large, xx-large ...
        activeBackColor={"#007bff"} //Possible value any string (color code)
        disabledBackColor={"#cccccc"} //Possible value any string (color code)
        striped={false} //Possible values true, false
        animated={false} //Possible values true, false
        labelColor={"#ffffff"} //Possible value any string (color code)
        borderRadius={0} //Possible value any number
        minValue={0} //Possible value any number
        currentValue={50} //Possible value any number
        maxValue={100} //Possible value any number
        showLabel={true} //Possible values true, false
      />
    </div>
  );
};

export default ProgressBarComponent;
```

## Author

Bhavya Mehta – [@LinkedIn](https://www.linkedin.com/in/bhavya-y-mehta/)

Mail Id - [@Gmail](bhavya.y.mehta@gmail.com)

Git Hub - [@GitHub](https://github.com/bhavya2611/Customizable-Progress-Bar)

Distributed under the MIT license. See `LICENSE` for more information.
