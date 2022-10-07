import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SingleDescription = ({ project }) => {
	return (
		<div className="flex items-start flex-col justify-start bg-gray-200 rounded-lg p-10 w-[90%] border-1 shadow-inner">
			<div class="flex flex-start flex-col p-5 text-justify">
				<div class="flex flex-col justify-start items-start mb-5">
					<p class="text-h4 font-bold">
						{project.title}
					</p>

					<small class="text-blue-600 underline italic mr-10">
						<a href={project.href} target="_blank" rel="noreferrer">
							{project.access.link}
						</a>
					</small>
					{project.access.user &&
						project.access.password &&
						<small class="text-gray-600 italic text-bold">
							user: {project.access.user} / password:{" "}
							{project.access.password}
						</small>}
				</div>
				<div class="">
					<p class="text-xl font-bold underline italic mb-1">
						Background and Problem statement
					</p>
					<p class="text-base pl-4">
						{project.problem}
					</p>
				</div>
				<div class="mt-5">
					<p class="text-xl font-bold underline italic mb-5">
						Some features developed:{" "}
					</p>
					<div class="pl-4 flex flex-col">
						{project.features.map(data => {
							return (
								<div
									class=" flex items-center justify-start my-1"
									key={data}
								>
									<div class="flex flex-col items-center justify-center">
										<span>
											<p class="ml-2 m-2 flex items-center ">
											<CheckCircleOutlineIcon color="success" sx={{ fontSize: 16 }} className="mr-3"/>	{data}
											</p>
										</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div class="mt-5">
					<p class="text-xl font-bold italic mb-1 underline">
						Finally
					</p>
					<p class="text-base italic pl-4 font-bold">
						{project.final}
					</p>
				</div>
			</div>
		</div>
	);
};


export default SingleDescription;





