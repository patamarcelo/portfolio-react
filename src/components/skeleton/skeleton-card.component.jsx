import { Skeleton } from '@mui/material';

const CardSkeleton = () => {
	return (
		<div className="flex flex-col items-center mb-5 w-full min-h-[100vh] single-card-container pb-0 rounded-bl-lg rounded-br-lg
						md:rounded-none  md:pb-4">
			<div className="title flex mb-5 mt-10 sm:justify-center text-center w-full flex-col items-center">
                {/* title */}
                <Skeleton variant="rounded" width={450} height={50} sx={{ bgcolor: 'grey.800' }}  />
			<div className="title flex mb-5 mt-10 sm:justify-center text-center w-full flex-col items-center">
                {/* Carousel */}
                <Skeleton variant="rounded" width={`${80}%`} height={500} sx={{ bgcolor: 'grey.800' }}  />
                <Skeleton variant="rounded" width={`${80}%`} height={50} sx={{ bgcolor: 'grey.800' }}  className="mt-4"/>
			</div>
			<div className="title flex mb-5 mt-10 sm:justify-center text-center w-full flex-col items-center">
                {/* description */}
                <Skeleton variant="rounded" width={`${80}%`} height={400} sx={{ bgcolor: 'grey.800' }} className="mb-2"/>
			</div>

		</div>
    </div>
	);
};

export default CardSkeleton;
