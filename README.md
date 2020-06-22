# Customizable Progress Bar

A completely customizable progress bar, with animation.

![Example progress bar image](images/example1.png)

## Installation

```sh
npm install --save customizable-prgress-bar
```

## Import

```JavaScript
import ProgressBar from "customizable-progress-bar";
```

## Usage

The values given to props in the example below, are also the default parameters.

```JavaScript
const Bar = () => {
    return (
        <div style={{ padding: 50, width: 400 }}>
            <ProgressBar
            slideIn={true} //Possible values true, false
            barHeight={30}  //Possible value any number
            labelSize={"medium"} //Possible any number or small, medium, large, x-large, xx-large ...
            activeBackColor={"#007bff"} //Possible value any string (color code)
            disabledBackColor={"#cccccc"} //Possible value any string (color code)
            striped={false}    //Possible values true, false
            animated={false}   //Possible values true, false
            labelColor={"#ffffff"}   //Possible value any string (color code)
            borderRadius={0}   //Possible value any number
            minValue={0}   //Possible value any number
            currentValue={50}   //Possible value any number
            maxValue={100}   //Possible value any number
            showLabel={true} //Possible values true, false
            />
        </div>
    );
}
```

## Author

Bhavya Mehta – [@LinkedIn](https://www.linkedin.com/in/bhavya-y-mehta/) – bhavya.y.mehta@gmail.com

Distributed under the MIT license. See `LICENSE` for more information.
