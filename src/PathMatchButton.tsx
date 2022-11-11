import { Button } from '@chakra-ui/react';

interface Props {
    text?: string;
    handleClick?: () => void;
}

const PathMatchButton = ({...props}: Props) => {
    return (
        <Button width='350px' borderRadius='100px' mt='6' border='solid 1px'>{props.text}</Button>
    )
}

export default PathMatchButton;
