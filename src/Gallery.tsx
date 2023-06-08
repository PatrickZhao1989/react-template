import React from 'react';

interface Scientist {
	name: string;
	avatar: Avatar;
	profession: string;
	awards: Array<string>;
	discovered: string;
}

interface Avatar {
	imageCode: string;
	alt: string;
	width: number;
	height: number;
}

const getImageUrl = (imageId: string, size = 'd') =>
	'https://i.imgur.com/' + imageId + '_' + size + '.jpg';

const scientists: Array<Scientist> = [
	{
		name: 'Maria Skłodowska-Curie',
		avatar: {
			imageCode: 'szV5sdG',
			alt: 'Maria Skłodowska-Curie',
			width: 70,
			height: 70,
		},
		profession: 'physicist and chemist',
		awards: [
			'Nobel Prize in Physics',
			'Nobel Prize in Chemistry',
			'Davy Medal',
			'Matteucci Meda',
		],
		discovered: 'polonium (element)',
	},
	{
		name: 'Katsuko Saruhashi',
		avatar: {
			imageCode: 'YfeOqp2',
			alt: 'Katsuko Saruhashi',
			width: 70,
			height: 70,
		},
		profession: 'geochemist',
		awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
		discovered: 'a method for measuring carbon dioxide in seawater',
	},
];

interface IProfileProps {
	scientist: Scientist;
}

const Profile = ({ scientist }: IProfileProps) => {
	return (
		<>
			<section className="profile">
				<h2>{scientist.name}</h2>
				<img
					className="avatar"
					src={getImageUrl(scientist.avatar.imageCode)}
					alt={scientist.avatar.alt}
					width={scientist.avatar.width}
					height={scientist.avatar.height}
				/>
				<ul>
					<li>
						<b>Profession: </b>
						{scientist.profession}
					</li>
					<li>
						<b>Awards: {scientist.awards.length}</b>({scientist.awards.join(',')})
					</li>
					<li>
						<b>Discovered: </b>
						{scientist.discovered}
					</li>
				</ul>
			</section>
			;
		</>
	);
};

export const Gallery = () => {
	return (
		<div>
			<h1>Notable Scientists</h1>
			{scientists.map((s: Scientist, i: number) => {
				return (
					<div key={i}>
						<Profile scientist={s} />
					</div>
				);
			})}
		</div>
	);
};
