import React from 'react'
import { formatNumber } from '../../../helpers/calculator.helper'
import { Button } from '../../../styles/Form'
import { SubHeading, Text } from '../../../styles/Typography'
import { BlurOverlay, CircleDataContainer, MainData, OutputData, OutputDataItem, OutputsContainer, RowDataContainer } from '../styles'
import { IoPeopleOutline } from 'react-icons/io5'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { Flex } from '../../../styles/Shared'
import { ClipLoader } from 'react-spinners'

interface PropsType {
    outputData: any;
    handleShowOutput: () => void
    show: boolean;
    loading: boolean
}

const OutputView: React.FC<PropsType> = ({ outputData, handleShowOutput, show, loading }) => {


    const redirectUser = () => {
        window.location.href = 'https://calendly.com/oneshot_ai/oneshot-demo'
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
                        <Text className='highlight-text'>{formatNumber(outputData.emails)}</Text>
                        <Flex style={{ gap: 10 }}>
                            <AiOutlineMail size={20} color={'#fff'} />
                            <Text className='op-data-label'>Emails</Text>
                        </Flex>

                        <Text className='highlight-text' style={{ marginTop: '16px' }}>{formatNumber(outputData.leads)}</Text>
                        <Flex style={{ gap: 10 }}>
                            <MdOutlineLeaderboard size={20} color={'#fff'} />
                            <Text className='op-data-label'>Leads</Text>
                        </Flex>
                    </MainData>
                </CircleDataContainer>
                <RowDataContainer>
                    <OutputDataItem>
                        <div className='op-data-label-container'>
                            <IoPeopleOutline size={20} />
                            <Text className='op-data-label'>No. of customers you need to reach the revenue goal: </Text>
                        </div>
                        <Text className='op-data-val'>{formatNumber(outputData.customers)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <div className='op-data-label-container'>
                            <MdOutlineBusinessCenter size={20} />
                            <Text className='op-data-label'>No. of opportunities you should have: </Text>
                        </div>
                        <Text className='op-data-val'>{formatNumber(outputData.opportunities)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <div className='op-data-label-container'>
                            <FaRegHandshake size={20} />
                            <Text className='op-data-label'>No. of meetings you should have: </Text>
                        </div>
                        <Text className='op-data-val'>{formatNumber(outputData.meetings)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <div className='op-data-label-container'>
                            <MdOutlineLeaderboard size={20} />
                            <Text className='op-data-label'>No. of leads you should have to contact: </Text>
                        </div>
                        <Text className='op-data-val'>{formatNumber(outputData.leads)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <div className='op-data-label-container'>
                            <AiOutlineMail size={20} />
                            <Text className='op-data-label'>No. of emails you should have to personalize and research: </Text>
                        </div>
                        <Text className='op-data-val'>{formatNumber(outputData.emails)}</Text>
                    </OutputDataItem>
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