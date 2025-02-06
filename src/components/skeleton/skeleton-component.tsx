import { Skeleton } from '@mui/material';
import './skeleton-component.css';
type SkeletonComponentProps = {
    variant: string;
}

export default function SkeletonComponent({variant}: SkeletonComponentProps){
    if(variant === 'post'){
        return(
            <div className="post-skeleton">
                <div className="post-header-skeleton">
                    <Skeleton sx={{bgcolor:'#222'}} animation='wave' variant="circular" width={40} height={40} />
                    <Skeleton sx={{bgcolor:'#222', fontSize:'18px'}} animation='wave' variant="text" width={100} />
                </div>
                <Skeleton sx={{bgcolor:'#222'}} animation='wave' variant="rectangular" width='100%' height={40}/>
                <Skeleton sx={{bgcolor:'#222', fontSize:'14px', margin:'10px 0'}} animation='wave' variant="text" width={80} />
                <Skeleton sx={{bgcolor:'#222'}} animation='wave' variant="rectangular" width={170} height={20}/>
            </div>
        )
    }
}