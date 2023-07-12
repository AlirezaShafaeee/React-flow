import React from 'react'
import { BaseEdge, EdgeProps, getBezierPath, getSmoothStepPath } from 'reactflow';
export default function CurvedEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
  }: EdgeProps) {
    const [edgePath] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
      borderRadius : 20,
      
    });
  
    return (
        <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
    );
  }