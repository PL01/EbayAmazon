import React from 'react';
import StyledSearch, { StyledSearchResults } from '../../styled/StyledSearch';
import StyledHeader from '../../styled/StyledHeader';
import SearchItem from '../SearchItem';
import { StyledItemLink } from '../../styled/StyledItem';
/// TODO Put in its own file

// Search will search trhough our items state -- no need to fetch
function findMatches(wordToMatch, items) {
	return items.filter((item) => {
		if (!wordToMatch) return;
		const regex = new RegExp(wordToMatch, 'gi');
		return item.name.match(regex) || item.price.match(regex);
	});
}

class Search extends React.Component {
	static defaultProps = {
		searchResults: []
	};
	handleChange = (e) => {
		let wordToMatch = e.target.value;
		let results = findMatches(wordToMatch, this.props.items);
		// store searchResults in state object using redux action
		this.props.setSearch(results);
	};
	render() {
		return (
			<React.Fragment>
				<StyledSearch>
					<div className="a">
						<input
							type="text"
							placeholder="Search for Items by brand, rating..."
							onChange={this.handleChange}
						/>
						{this.props.searchResults.length > 0 && (
							<StyledSearchResults>
								{this.props.searchResults.map((item) => (
									<StyledItemLink href={`/items/${item.id}`} key={item.id}>
										<SearchItem key={item.id} poster={item.poster} name={item.name} />
									</StyledItemLink>
								))}
							</StyledSearchResults>
						)}
					</div>
				</StyledSearch>
			</React.Fragment>
		);
	}
}

class SubMenu extends React.Component {
	handleClick = (e) => {
		let category = e.target.name;
		this.props.setCategory(category);
	};
	render() {
		return (
			<div className="sub-menu">
				{[ 'supreme', 'sneakers', 'books', 'electronics' ].map((category) => (
					<button
						className={this.props.default_category === category ? 'styled-link' : ''}
						name={category}
						onClick={this.handleClick}
					>
						{category.toUpperCase()}
					</button>
				))}
			</div>
		);
	}
}

const Header = ({ items, setSearchResults, searchResults, setCategory, default_category }) => {
	return (
		<StyledHeader>
			<Search items={items} setSearch={setSearchResults} searchResults={searchResults} />
			<SubMenu items={items} setCategory={setCategory} default_category={default_category} />
		</StyledHeader>
	);
};

export default Header;
