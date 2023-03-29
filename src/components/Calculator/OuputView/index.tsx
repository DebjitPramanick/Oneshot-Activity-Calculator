import React from 'react'
import { formatNumber } from '../../../helpers/calculator.helper'
import { Button } from '../../../styles/Form'
import { SmallText, SubHeading, Text } from '../../../styles/Typography'
import { MainData, MainDataContainer, MessageBox, OtherDataContainer, OutputData, OutputDataItem, OutputsContainer } from '../styles'
import { IoPeopleOutline } from 'react-icons/io5'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Flex } from '../../../styles/Shared'

interface PropsType {
    outputData: any
}

const OutputView: React.FC<PropsType> = ({ outputData }) => {


    const redirectUser = () => {
        window.location.href = 'https://calendly.com/oneshot_ai/oneshot-demo'
    }

    return (
        <OutputsContainer>
            <SubHeading>Result</SubHeading>
            <OutputData>
                <MainDataContainer>
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
                </MainDataContainer>
                <OtherDataContainer>
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
                            <Text className='op-data-label'>No. of opportunities you will have: </Text>
                        </div>
                        <Text className='op-data-val'>{formatNumber(outputData.opportunities)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <div className='op-data-label-container'>
                            <FaRegHandshake size={20} />
                            <Text className='op-data-label'>No. of meetings you will have: </Text>
                        </div>
                        <Text className='op-data-val'>{formatNumber(outputData.meetings)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <div className='op-data-label-container'>
                            <MdOutlineLeaderboard size={20} />
                            <Text className='op-data-label'>No. of leads you have to contact: </Text>
                        </div>
                        <Text className='op-data-val'>{formatNumber(outputData.leads)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <div className='op-data-label-container'>
                            <AiOutlineMail size={20} />
                            <Text className='op-data-label'>No. of emails you have to personalize and research: </Text>
                        </div>
                        <Text className='op-data-val'>{formatNumber(outputData.emails)}</Text>
                    </OutputDataItem>
                </OtherDataContainer>
            </OutputData>
            <MessageBox>
                <Flex style={{ gap: 4, marginBottom: '10px' }}><AiOutlineInfoCircle size={20} /> <Text>Message</Text></Flex>
                {outputData.emails > 100 ? (
                    <SmallText>
                        Researching and personalising all these {formatNumber(outputData.emails)} emails is humanly impossible
                        and hence why you should try out <a href='https://www.oneshot.ai/'>oneshot.ai</a> to make it fully AI
                        driven automated prospecting.
                    </SmallText>
                ) : (
                    <SmallText>
                        You can also try out <a href='https://www.oneshot.ai/'>oneshot.ai</a> to make it fully AI
                        driven automated prospecting.
                    </SmallText>
                )}
            </MessageBox>
            <div>
                <SubHeading>
                    Feeling tideous with sending emails?
                </SubHeading>
                <Text style={{ marginTop: '20px' }}>
                    Talk to us for the most personalized experience possible.
                </Text>
                <Button style={{ margin: '30px auto 0' }} onClick={redirectUser}>Book a demo</Button>
            </div>
        </OutputsContainer>
    )
}

export default OutputView