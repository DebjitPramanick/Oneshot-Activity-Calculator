import React from 'react'
import { formatNumber } from '../../../helpers/calculator.helper'
import { Button } from '../../../styles/Form'
import { SubHeading, Text } from '../../../styles/Typography'
import { BlurOverlay, CircleDataContainer, MainData, OutputData, OutputDataItem, OutputsContainer, RowDataContainer } from '../styles'
import { Flex } from '../../../styles/Shared'
import { ClipLoader } from 'react-spinners'
import { getIcon } from '../../../helpers/icons.helper'
import DEMO from '../data/demoOutput'

interface PropsType {
    outputData: any[];
    handleShowOutput: () => void
    show: boolean;
    loading: boolean
}

const OutputView: React.FC<PropsType> = ({
    outputData,
    handleShowOutput,
    show,
    loading
}) => {


    const redirectUser = () => {
        window.location.href = 'https://calendly.com/oneshot_ai/oneshot-demo'
    }

    const getKeyVal = (key: string) => {
        let index = outputData.findIndex(item => item.id.includes(key))
        return outputData[index].val;
    }

    return (
        <OutputsContainer>
            {!show && (
                <BlurOverlay textWidth={'60%'}>
                    {loading ? (
                        <ClipLoader color='#fff' size={90} />
                    ) : (
                        <>
                            <SubHeading style={{ marginBottom: '16px' }}>Please check the input values and then click below to see the result</SubHeading>
                            <Button onClick={handleShowOutput}>Reveal</Button>
                        </>
                    )}
                </BlurOverlay>
            )}
            {loading && (
                <BlurOverlay textWidth={'60%'}>
                    <ClipLoader color='#fff' size={90} />
                </BlurOverlay>
            )}
            <SubHeading>Result</SubHeading>
            <OutputData>
                <CircleDataContainer>
                    <MainData>
                        <Text className='highlight-text'>{formatNumber(getKeyVal('email'))}</Text>
                        <Flex style={{ gap: 10 }}>
                            {getIcon('emails', 20, '#fff')}
                            <Text className='op-data-label'>Emails</Text>
                        </Flex>

                        <Text className='highlight-text' style={{ marginTop: '16px' }}>{formatNumber(getKeyVal('leads'))}</Text>
                        <Flex style={{ gap: 10 }}>
                            {getIcon('leads', 20, '#fff')}
                            <Text className='op-data-label'>Leads</Text>
                        </Flex>
                    </MainData>
                </CircleDataContainer>
                <RowDataContainer>
                    {outputData.map((item) => (
                        <OutputDataItem key={item.id}>
                            <div className='op-data-label-container'>
                                {getIcon(item.name, 20, '#ffffffc9')}
                                <Text className='op-data-label'>{item.label}</Text>
                            </div>
                            <Text className='op-data-val'>{formatNumber(item.val)}</Text>
                        </OutputDataItem>
                    ))}
                </RowDataContainer>
            </OutputData>

            <div style={{ marginTop: '20px' }}>
                <SubHeading>
                    Feeling overwhelmed with all these activities?
                </SubHeading>
                <Button style={{ margin: '30px auto 0' }} onClick={redirectUser}>Book a demo</Button>
            </div>
        </OutputsContainer>
    )
}

export default OutputView