import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SingleDescription = ({ project }) => {
	return (
		<div className="flex items-start flex-col justify-start bg-gray-100 rounded-lg p-0 md:p-10 w-[98%] mb-1 md:mt-0 mt-10 md:w-[90%] border-1 shadow-inner">
			<div className="flex flex-start flex-col p-5 text-justify">
				<div className="flex flex-col justify-start items-start mb-5">
					<p className="text-h4 font-bold">
						{project.title}
					</p>

					<small className="text-blue-600 underline italic mr-10">
						<a href={project.href} target="_blank" rel="noreferrer">
							{project.access.link}
						</a>
					</small>
					{project.access.user &&
						project.access.password &&
						<small className="text-gray-600 italic text-bold">
							user: {project.access.user} / password:{" "}
							{project.access.password}
						</small>}
				</div>
				<div className="">
					<p className="text-xl font-bold underline italic mb-1">
						Background and Problem statement
					</p>
					<p className="text-base pl-4">
						{project.problem}
					</p>
				</div>
				<div className="mt-5">
					<p className="text-xl font-bold underline italic mb-5">
						Some features developed:{" "}
					</p>
					<div className="pl-4 flex flex-col">
						{project.features.map(data => {
							return (
								<div
									className=" flex items-center justify-start my-1"
									key={data}
								>
									<div className="flex flex-col items-center justify-center">
										<span>
											<p className="ml-2 m-2 flex items-center ">
											<CheckCircleOutlineIcon color="success" sx={{ fontSize: 16 }} className="mr-3"/>	{data}
											</p>
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="mt-5">
					<p className="text-xl font-bold italic mb-1 underline">
						Finally
					</p>
					<p className="text-base italic pl-4 font-bold">
						{project.final}
					</p>
				</div>
			</div>
		</div>
	);
};


export default SingleDescription;





