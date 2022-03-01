import {Button} from '@enact/sandstone/Button';
import ri from '@enact/ui/resolution';
import {Row, Column, Cell} from '@enact/ui/Layout';
import {InputField} from '@enact/sandstone/Input';
import ImageItem from '@enact/sandstone/ImageItem';
import {VirtualGridList} from '@enact/sandstone/VirtualList';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import {createRef, Component} from 'react';
import spotlight from '@enact/spotlight';
import SpotlightContainerDecorator from '@enact/spotlight/SpotlightContainerDecorator';

const ListContainer = SpotlightContainerDecorator('div');
const OptionsContainer = SpotlightContainerDecorator({leaveFor: {down: '#left'}}, 'div');
const getScrollbarVisibility = (hidden) => hidden ? 'hidden' : 'auto';

spotlight.setPointerMode(false);

const items = [];

const renderItem = ({index, ...rest}) => {
	const {source, subText, text} = items[index];
	return (
		<ImageItem
			{...rest}
			id={`item${index}`}
			label={subText}
			src={source}
			style={{margin: 0}}
		>
			{text}
		</ImageItem>
	);
};

const updateData = (filesys, items, dataSize, noLabel) => {
	// filesys.length = 0;
	console.log('updateData', filesys)
	for (let i = 1; i < filesys.length; i++) {
		const
			// count = (headingZeros + i).slice(-itemNumberDigits),
			text = Array.isArray(filesys[i]) ? filesys[i][0]: filesys[i],
			subText = `SubItem ${text}`,
			color = Math.floor((Math.random() * (0x1000000 - 0x101010)) + 0x101010).toString(16),
			source = {
				'hd': `https://www.teahub.io/photos/full/301-3012186_best-iphone-wallpapers-colour-blur.jpg`,
				'fhd': `https://www.teahub.io/photos/full/301-3012186_best-iphone-wallpapers-colour-blur.jpg`,
				'uhd': `https://wallpapercave.com/wp/wp7312732.jpg`
			};

		if (noLabel) {
			items.push({source});
		} else {
			items.push({text, subText, source});
		}
	}

	return dataSize;
};

class app extends Component {
	constructor (props) {
		super(props);
		console.log('crilll', props.filesys.length)
		this.state = {
			hideScrollbar: "auto",
			horizontal: false,
			noLabel: false,
			numItems: props.filesys[props.filesys.length-1].length-1,
			minHeight: 500,
			minWidth: 650,
			spacing: 24,
			spotlightDisabled: false,
			translate: false,
			wrap: false,
			filesys: props.filesys[0]
		};
		this.rootRef = createRef();
		updateData(this.state.filesys, items, this.state.numItems, this.state.noLabel);
	}

	onKeyDown = () => {
		if (this.rootRef.current.dataset.keydownEvents) {
			this.rootRef.current.dataset.keydownEvents = Number(this.rootRef.current.dataset.keydownEvents) + 1;
		} else {
			this.rootRef.current.dataset.keydownEvents = 1;
		}
	};

	render () {
		const
			inputStyle = {width: ri.scaleToRem(300)},
			{hideScrollbar, horizontal, noLabel, numItems, minHeight, minWidth, spacing, spotlightDisabled, translate, wrap, filesys} = this.state;
		return (
			<div {...this.props} id="list" ref={this.rootRef}>
				<Column>
					<Cell component={OptionsContainer} shrink>
						{/* space for dropdown */}
					</Cell>
					<Cell component={ListContainer}>
						<Row align="center">
							<Cell align="stretch">
								<Column align="center">
									<Cell>
										<VirtualGridList
											dataSize={numItems}
											direction={(horizontal ? 'horizontal' : 'vertical')}
											horizontalScrollbar={hideScrollbar}
											itemRenderer={renderItem}
											itemSize={{
												minHeight: ri.scale(minHeight),
												minWidth: ri.scale(minWidth)
											}}
											key={(translate ? 'translate' : 'native')}
											onKeyDown={this.onKeyDown}
											onScrollStart={this.onScrollStart}
											onScrollStop={this.onScrollStop}
											scrollMode={(translate ? 'translate' : 'native')}
											spacing={ri.scale(spacing)}
											spotlightDisabled={spotlightDisabled}
											style={{height: ri.scaleToRem(500 * 3)}}
											verticalScrollbar={getScrollbarVisibility(hideScrollbar)}
											wrap={wrap}
										/>
									</Cell>
									<Cell component={Button} shrink id="bottom">
										Bottom
									</Cell>
								</Column>
							</Cell>
						</Row>
					</Cell>
				</Column>
			</div>
		);
	}
}

export default ThemeDecorator(app);
