import Dropdown from '@enact/sandstone/Dropdown';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import {useState, useCallback} from 'react';
import spotlight from '@enact/spotlight';

// NOTE: Forcing pointer mode off so we can be sure that regardless of webOS pointer mode the app
// runs the same way
spotlight.setPointerMode(false);
const children = Array.from(Array(5), (v, i) => (i + ''));

function DropdownChange ({changeProp, changePropValue, waiting = 500, ...rest}) {
	const [value, change] = useState(rest[changeProp]);

	const onOpen = useCallback(() => {
		const timer = setTimeout(() => {
			change(changePropValue);
		}, waiting);

		return () => clearTimeout(timer);
	}, [change, changePropValue, waiting]);

	rest[changeProp] = value;

	return <Dropdown {...rest} onOpen={onOpen} />;
}

const app = (props) => <div {...props}>
	<div  id="wrapper">
		<DropdownChange 
            id="dropdown" 
            changeProp="children" 
            changePropValue={children.filter((v) => v.includes(''))} 
            selected={3} 
            title="Explorer" 
            waiting={1500}
        >
			{children}
		</DropdownChange>
	</div>
</div>;

export default ThemeDecorator(app);
