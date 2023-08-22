import React from 'react'
import { formatNumber } from '../../../helpers/calculator.helper'
import { Button } from '../../../styles/Form'
import { SubHeading, Text } from '../../../styles/Typography'
import { BlurOverlay, CircleDataContainer, MainData, OutputData, OutputDataItem, OutputsContainer, RowDataContainer } from '../styles'
import { Flex } from '../../../styles/Shared'
import { ClipLoader } from 'react-spinners'
import { getOutputIcon } from '../../../helpers/icons.helper'
import { IntroLabelsType, OutputLabelsType } from '../../../types'

interface PropsType {
    outputData: any[];
    handleShowOutput: () => void
    show: boolean;
    loading: boolean;
    labels?: OutputLabelsType;
    introLabels?: IntroLabelsType
}

const OutputView: React.FC<PropsType> = ({
    outputData,
    handleShowOutput,
    show,
    loading,
    labels,
    introLabels
}) => {


    const redirectUser = () => {
        window.open('https://meetings.hubspot.com/gautam-rishi/demo-round-robin?utm_source=activitycalc&utm_medium=book')
    }

    const getKeyVal = (key: string) => {
        let index = outputData.findIndex(item => item.id.includes(key))
        return outputData[index].val;
    }

    const getOutputLabel = (key: string, altLabel: string) => {
        let label = altLabel;
        if (labels) label = (labels as any)[`${key}_label`]
        return label;
    }

    return (
        <OutputsContainer>
            {!show && (
                <BlurOverlay textWidth={'60%'}>
                    {loading ? (
                        <ClipLoader color='#fff' size={90} />
                    ) : (
                        <>
                            <SubHeading style={{ marginBottom: '16px' }}>{introLabels?.shouldReveal_label || 'Please check the input values and then click below to see the result'}</SubHeading>
                            <Button onClick={handleShowOutput} className='medium'>{introLabels?.shouldRevealButton_label || 'Reveal'}</Button>
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
                            {getOutputIcon('emails', 20, '#fff')}
                            <Text className='op-data-label'>Emails (/month)</Text>
                        </Flex>

                        <Text className='highlight-text' style={{ marginTop: '16px' }}>{formatNumber(getKeyVal('leads'))}</Text>
                        <Flex style={{ gap: 10 }}>
                            {getOutputIcon('leads', 20, '#fff')}
                            <Text className='op-data-label'>Leads (/month)</Text>
                        </Flex>
                    </MainData>
                </CircleDataContainer>
                <RowDataContainer>
                    {outputData.map((item) => (
                        <OutputDataItem key={item.id}>
                            <div className='op-data-label-container'>
                                {getOutputIcon(item.name, 20, '#ffffffc9')}
                                <Text className='op-data-label'>{getOutputLabel(item.name, item.label)}</Text>
                            </div>
                            <Text className='op-data-val'>{formatNumber(item.val)}</Text>
                        </OutputDataItem>
                    ))}
                </RowDataContainer>
            </OutputData>

            <div style={{ marginTop: '20px' }}>
                <SubHeading>
                    {labels?.demoQuestion_label || 'Feeling overwhelmed with all these activities?'}
                </SubHeading>
                <Button style={{ margin: '30px auto 0' }} onClick={redirectUser}>Book a demo</Button>
            </div>
        </OutputsContainer>
    )
}

export default OutputView
